# Welcome to PINNacle

Welcome to the document for PINNacle: A Comprehensive Benchmark of
Physics-Informed Neural Networks for Solving PDEs.

![](https://raw.githubusercontent.com/i207M/PINNacle/master/resources/pinnacle.png)

## Introduction

While significant progress has been made on Physics-Informed Neural Networks (PINNs), a comprehensive comparison of these methods across a wide range of Partial Differential Equations (PDEs) is still lacking.

PINNacle is a benchmarking tool designed to fill this gap. PINNacle provides a diverse dataset, comprising over 20 distinct PDEs from various domains including heat conduction, fluid dynamics, biology, and electromagnetics. These PDEs encapsulate key challenges inherent to real-world problems, such as complex geometry, multi-scale phenomena, nonlinearity, and high dimensionality.

PINNacle also offers a user-friendly toolbox, incorporating about 10 state-of-the-art PINN methods for systematic evaluation and comparison. We have conducted extensive experiments with these methods, offering insights into their strengths and weaknesses.

While PINNacle does not guarantee success in all real-world scenarios, it represents a significant contribution to the field by offering a robust, diverse, and comprehensive benchmark suite that will undoubtedly foster further research and development in PINNs.

Our code is published [here](https://github.com/i207M/PINNacle).

## Citation

If you find out work useful, please cite our paper at:

```bibtex
@article{hao2023pinnacle,
  title={PINNacle: A Comprehensive Benchmark of Physics-Informed Neural Networks for Solving PDEs},
  author={Hao, Zhongkai and Yao, Jiachen and Su, Chang and Su, Hang and Wang, Ziao and Lu, Fanzhi and Xia, Zeyu and Zhang, Yichi and Liu, Songming and Lu, Lu and others},
  journal={arXiv preprint arXiv:2306.08827},
  year={2023}
}
```

We also suggest you have a look at the survey paper ([Physics-Informed Machine Learning: A Survey on Problems, Methods and Applications](https://arxiv.org/abs/2211.08064)) about PINNs, neural operators, and other paradigms of PIML.

```bibtex
@article{hao2022physics,
  title={Physics-informed machine learning: A survey on problems, methods and applications},
  author={Hao, Zhongkai and Liu, Songming and Zhang, Yichi and Ying, Chengyang and Feng, Yao and Su, Hang and Zhu, Jun},
  journal={arXiv preprint arXiv:2211.08064},
  year={2022}
}
```
