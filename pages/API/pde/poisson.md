# Module PINNacle.src.pde.poisson

## Classes

`Poisson1D(a=1)`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

`Poisson2D_Classic(datapath='ref/poisson1_cg_data.dat', scale=1)`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

`Poisson2D_ManyArea(datapath='ref/poisson_manyarea.dat', bbox=[-10, 10, -10, 10], split=(5, 5), freq=2)`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

`Poisson3D_ComplexGeometry(datapath='ref/poisson_3d.dat', bbox=[0, 1, 0, 1, 0, 1], interface_z=0.5, circ=[(0.4, 0.3, 0.6, 0.2), (0.6, 0.7, 0.6, 0.2), (0.2, 0.8, 0.7, 0.1), (0.6, 0.2, 0.3, 0.1)], A=(20, 100), m=(1, 10, 5), k=(8, 10), mu=(1, 1))`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

`PoissonBoltzmann2D(datapath='ref/poisson_boltzmann2d.dat', k=8, mu=(1, 4), A=10, bbox=[-1, 1, -1, 1], circ=[(0.5, 0.5, 0.2), (0.4, -0.4, 0.4), (-0.2, -0.7, 0.1), (-0.6, 0.5, 0.3)])`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

`PoissonND(dim=5, len=1)`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE
