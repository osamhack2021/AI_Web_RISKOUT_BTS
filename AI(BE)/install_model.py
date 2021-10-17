import argparse
import gdown
from pathlib import Path


parser = argparse.ArgumentParser(description="[*] Download the models")
DOWNLOAD_PATH = "https://drive.google.com/uc?id={}"

if __name__ == '__main__': 
    args = parser.parse_args()
    model_dir = Path('models')

    """ kobart_summary """ 
    dir_path = model_dir / 'kobart_summary'
    config_path = dir_path / 'config.json'
    model_path = dir_path / 'pytorch_model.bin'
    if not dir_path.exists():
        dir_path.mkdir(parents=True)   

    if not config_path.exists():
        url = DOWNLOAD_PATH.format('10fEMNw9cuTdA_kuv7AwQZqj2Bilb5vjI')
        gdown.download(url, output=str(config_path))

    if not model_path.exists():
        url = DOWNLOAD_PATH.format('12Q1e6nZxPUeVGR6-BgFAgeJKTZXI4Wpc')
        gdown.download(url, output=str(model_path))

    """ distilkobert_sentiment """
    dir_path = model_dir / 'distilkobert_sentiment'
    config_path = dir_path / 'config.json'
    model_path = dir_path / 'pytorch_model.bin'
    if not dir_path.exists():
        dir_path.mkdir(parents=True)   

    if not config_path.exists():
        url = DOWNLOAD_PATH.format('1-9gV51EjOxIkKZt3YT6G9qiM1dH_pTPg')
        gdown.download(url, output=str(config_path))

    if not model_path.exists():
        url = DOWNLOAD_PATH.format('1-DnozJM2QD2np-BvJyaZ_uv5SAI2vFLo')
        gdown.download(url, output=str(model_path))

    """ distilkobert_ner """
    dir_path = model_dir / 'distilkobert_ner'
    config_path = dir_path / 'config.json'
    model_path = dir_path / 'pytorch_model.bin'
    if not dir_path.exists():
        dir_path.mkdir(parents=True)   

    if not config_path.exists():
        url = DOWNLOAD_PATH.format('1-9p_jzrzl0OS6diRYEb_vbYeJINNbRXv')
        gdown.download(url, output=str(config_path))

    if not model_path.exists():
        url = DOWNLOAD_PATH.format('1-5ZUhBAAK1ivBkCM5XOTyD3sngmUD0Wt')
        gdown.download(url, output=str(model_path))


    """ fakenews_cnn """    
    dir_path = model_dir / 'snufc'
    vocab_path = dir_path / 'vocab.pkl'
    model_path = dir_path / 'SenCNN.st'
    if not dir_path.exists():
        dir_path.mkdir(parents=True)   

    if not vocab_path.exists():
        url = DOWNLOAD_PATH.format('1-TGOAwOpcfnCjV1nMWfk-q97I288rwQM')
        gdown.download(url, output=str(vocab_path))

    if not model_path.exists():
        url = DOWNLOAD_PATH.format('180tanNMyIW-Ca2aheVEDx6eMgcVa7wLU')
        gdown.download(url, output=str(model_path))
