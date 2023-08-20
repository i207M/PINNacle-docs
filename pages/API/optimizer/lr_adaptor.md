# Module PINNacle.src.optimizer.lr_adaptor

## Classes

`LR_Adaptor(optimizer, loss_weight, num_pde, alpha=0.1, mode='max')`
: Callback for learning rate annealing algorithm of physics-informed neural networks.

    loss_weight - initial loss weights
    num_pde - the number of the PDEs (boundary conditions excluded)
    alpha - parameter of moving average
    mode - "max" (PINN-LA), "mean" (PINN-LA-2)

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `step(self, closure)`
    :
