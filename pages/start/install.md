# Installation

Here you can find the instructions to install and run PINNacle.

## Setup

It is recommended to use a virtual environment to install PINNacle. For example, using [Anaconda](https://www.anaconda.com/products/individual) you can create a new environment with Python 3.9 as follows:

```shell
conda create -n pinnacle python=3.9
conda activate pinnacle
```

Then, you can setup PINNacle by running the following commands:

```shell
git clone https://github.com/i207M/PINNacle.git --depth 1
cd PINNacle
pip install -r requirements.txt
```

## Quick Test

To quickly test PINNacle, you can run the following command:

```shell
python benchmark.py
```

It will run all 20 cases with default settings. The results will be saved in the `runs` folder.
