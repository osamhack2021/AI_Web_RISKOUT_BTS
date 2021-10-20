import collections

def tokenize(texts, tokenizer, split_by,
             max_seq_len = 512,
             pad_token_label_id = -100,
             cls_token_segment_id = 0,
             pad_token_segment_id = 0,
             sequence_a_segment_id = 0,
             mask_padding_with_zero = True,              
             verbose = False):
    # texts (List[List[str]]): e.g. [['나는', '창원대학교에서', ... ]]
    # Extract the Features for BERT-NER
    cls_token = tokenizer.cls_token
    sep_token = tokenizer.sep_token
    unk_token = tokenizer.unk_token
    pad_token_id = tokenizer.pad_token_id

    encodings = collections.defaultdict(lambda: [])
    for words in texts:        
        # Tokenize word by word (for NER)
        tokens = []
        slot_label_mask = []
        for word in split_by(words):
            # print(word)
            word_tokens = tokenizer.tokenize(word)
            if not word_tokens:
                word_tokens = [unk_token]   # For handling the bad-encoded word
            tokens.extend(word_tokens)
            slot_label_mask.extend([0] + [pad_token_label_id] * (len(word_tokens) - 1))
            # print(tokens, slot_label_mask, sep='\t')

        # Account for [CLS] and [SEP]
        special_tokens_count = 2
        if len(tokens) > max_seq_len - special_tokens_count:
            tokens = tokens[: (max_seq_len - special_tokens_count)]
            slot_label_mask = slot_label_mask[:(max_seq_len - special_tokens_count)]

        # Add [SEP] token
        tokens += [sep_token]
        token_type_ids = [sequence_a_segment_id] * len(tokens)
        slot_label_mask += [pad_token_label_id]

        # Add [CLS] token
        tokens = [cls_token] + tokens
        token_type_ids = [cls_token_segment_id] + token_type_ids
        slot_label_mask = [pad_token_label_id] + slot_label_mask

        input_ids = tokenizer.convert_tokens_to_ids(tokens)

        # The mask has 1 for real tokens and 0 for padding tokens. Only real tokens are attended to.
        attention_mask = [1 if mask_padding_with_zero else 0] * len(input_ids)
        
        # Zero-pad up to the sequence length.
        padding_length = max_seq_len - len(input_ids)
        input_ids = input_ids + ([pad_token_id] * padding_length)
        attention_mask = attention_mask + ([0 if mask_padding_with_zero else 1] * padding_length)
        token_type_ids = token_type_ids + ([pad_token_segment_id] * padding_length)
        slot_label_mask = slot_label_mask + ([pad_token_label_id] * padding_length)

        encodings["input_ids"].append(input_ids)
        encodings["attention_mask"].append(attention_mask)
        encodings["token_type_ids"].append(token_type_ids)
        encodings["slot_label_mask"].append(slot_label_mask)
        
    return encodings