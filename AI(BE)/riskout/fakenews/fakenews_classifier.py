import dill
import torch
import torch.nn.functional as F
from riskout.fakenews.model.net import SenCNN
from riskout.fakenews.model.utils import Tokenizer, PadSequence
from typing import List, Union, Optional, Callable


def get_tokenizer(vocab_path, split_morphs):
    with open(vocab_path, mode="rb") as io:
        vocab = dill.load(io)
    pad_sequence = PadSequence(
        length=70, pad_val=vocab.to_indices(vocab.padding_token)
    )
    tokenizer = Tokenizer(vocab=vocab, split_fn=split_morphs, pad_fn=pad_sequence)
    return tokenizer


class FakeNewsClassifier:
    """ SenCNN Fakenews classifier 
    
    Args:
        vocab_path (str): path for vocab pickle file
        model_path (str): pt file path for SenCNN trained model
        split_morphs (Callable[str, List[str]]): split sentence to morphs chunks
    """ 
    def __init__(self, vocab_path, model_path, split_morphs):
        self.split_morphs = split_morphs
        self.tokenizer = get_tokenizer(vocab_path, split_morphs)
        
        self.model = SenCNN(num_classes=2, vocab=self.tokenizer.vocab)
        self.model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
        self.model.eval()
        
    def predict(self, texts: Union[List[str],str]):
        """Return probability of being true"""    
        if isinstance(texts, str):
            texts = [texts]
        with torch.no_grad():
            X = torch.tensor([self.tokenizer.split_and_transform(text) for text in texts])
            y_hat = self.model(X)
            prob = F.softmax(y_hat, dim=1)[0][1]
        return prob.item()

