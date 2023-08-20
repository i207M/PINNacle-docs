# Module PINNacle.src.optimizer.ntk

## Classes

`LR_Adaptor_NTK(optimizer, loss_weight, pde)`
: Callback for learning rate annealing algorithm of physics-informed neural networks.

    loss_weight - initial loss weights
    num_pde - the number of the PDEs (boundary conditions excluded)

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `step(self, closure)`
    :
