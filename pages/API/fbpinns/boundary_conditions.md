Module PINNacle-yaojc.fbpinns.boundary_conditions
=================================================
Created on Wed Mar 31 12:26:08 2021

@author: bmoseley

Functions
---------

    
`AB_1D_2(x, y, j, jj, A, B, mu, sd)`
:   Apply y = tanh^2((x-mu)/sd)*NN + B*sd*tanh((x-mu)/sd) + A ansatz

    
`A_1D_1(x, y, j, A, mu, sd)`
:   Apply y = tanh((x-mu)/sd)*NN + A ansatz

    
`sigmoid_2(x, mu, sd)`
:   Compute solution/gradients of y=sigmoid((x-mu)/sd)

    
`tanh2_2(x, mu, sd)`
:   Compute solution/gradients of y=tanh^2((x-mu)/sd)

    
`tanh_1(x, mu, sd)`
:   Compute solution/gradients of y=tanh((x-mu)/sd)

    
`tanh_2(x, mu, sd)`
:   Compute solution/gradients(j,jj) of y=tanh((x-mu)/sd)

    
`tanh_tanh2_2(x, mu, sd)`
:   Compute solution/gradients of y=tanh((x-mu)/sd) and y=tanh^2((x-mu)/sd)

    
`tanhtanh_2(x, mu1, mu2, sd)`
:   Compute solution/gradients of y=tanh((x-mu1)/sd)*tanh((x-mu2)/sd)