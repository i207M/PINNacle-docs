# Module PINNacle.src.pde.baseclass

## Classes

`BasePDE()`
:

    ### Descendants

    * PINNacle.src.pde.baseclass.BaseTimePDE
    * PINNacle.src.pde.helmholtz.Helmholtz2D
    * PINNacle.src.pde.inverse.PoissonInv
    * PINNacle.src.pde.ns.NS2D_BackStep
    * PINNacle.src.pde.ns.NS2D_Classic
    * PINNacle.src.pde.ns.NS2D_LidDriven
    * PINNacle.src.pde.poisson.Poisson1D
    * PINNacle.src.pde.poisson.Poisson2D_Classic
    * PINNacle.src.pde.poisson.Poisson2D_ManyArea
    * PINNacle.src.pde.poisson.Poisson3D_ComplexGeometry
    * PINNacle.src.pde.poisson.PoissonBoltzmann2D
    * PINNacle.src.pde.poisson.PoissonND
    * PINNacle.src.pde.wave.Wave1D
    * PINNacle.src.pde.wave.Wave2D_Heterogeneous

    ### Instance variables

    `input_dim`
    :

    `num_boundary`
    :

    `num_gepinn`
    :

    `num_loss`
    :

    `num_pde`
    :

    `output_dim`
    :

    ### Methods

    `add_bcs(self, config, geom=None)`
    :

    `check(self)`
    :

    `create_model(self, net)`
    :

    `load_ref_data(self, datapath, transform_fn=None, t_transpose=False)`
    :

    `set_pdeloss(self, names=None, num=1)`
    :

    `training_points(self, domain=8192, boundary=2048, test=8192, mul=1)`
    :

    `trans_time_data_to_dataset(self, datapath)`
    :

    `use_gepinn(self)`
    :

`BaseTimePDE()`
:

    ### Ancestors (in MRO)

    * PINNacle.src.pde.baseclass.BasePDE

    ### Descendants

    * PINNacle.src.pde.burgers.Burgers1D
    * PINNacle.src.pde.burgers.Burgers2D
    * PINNacle.src.pde.chaotic.GrayScottEquation
    * PINNacle.src.pde.chaotic.KuramotoSivashinskyEquation
    * PINNacle.src.pde.heat.Heat2D_ComplexGeometry
    * PINNacle.src.pde.heat.Heat2D_LongTime
    * PINNacle.src.pde.heat.Heat2D_Multiscale
    * PINNacle.src.pde.heat.Heat2D_VaryingCoef
    * PINNacle.src.pde.heat.HeatND
    * PINNacle.src.pde.inverse.HeatInv
    * PINNacle.src.pde.ns.NS2D_LongTime
    * PINNacle.src.pde.wave.Wave2D_LongTime

    ### Instance variables

    `input_dim`
    :

    ### Methods

    `add_bcs(self, config)`
    :

    `create_model(self, net)`
    :

    `load_ref_data(self, datapath, transform_fn=None, t_transpose=True)`
    :

    `training_points(self, domain=8192, boundary=2048, initial=2048, test=8192, mul=1)`
    :
