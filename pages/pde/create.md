# Create Your Own PDE Class

We'll use the `BasePDE` class as a foundation and demonstrate how to implement custom PDEs using examples from our library.

## Step 0: Import Required Libraries

First, import the necessary libraries and the `BasePDE` class:

```python
import numpy as np
import torch
import deepxde as dde

from PINNacle.src.pde import baseclass
```

## Step 1: Define Your PDE Class

Create a new class that inherits from `baseclass.BasePDE`:

```python
class YourCustomPDE(baseclass.BasePDE):
    def __init__(self, param1, param2, ...):
        super().__init__()
        # Initialize your PDE-specific parameters here
```

## Step 2: Set Output Configuration

Define the name of each output dimension for your PDE:

```python
self.output_config = [{'name': 'output1'}, {'name': 'output2'}, ...]
```

For example, in the `NS2D_Classic` class, the output are velocity components `u`, `v`, and pressure `p`. So the output configuration is:

```python
self.output_config = [{'name': 'u'}, {'name': 'v'}, {'name': 'p'}]
```

## Step 3: Define the Geometry

Set up the geometry for your PDE:

```python
self.bbox = [x_min, x_max, y_min, y_max]
self.geom = dde.geometry.Rectangle(xmin=[x_min, y_min], xmax=[x_max, y_max])
```

The `geom` should always be inside the `bbox`. The `geom` is used to sample data points and the `bbox` is used to make plots.

For more complex geometries, you can use CSG operations as shown in our codes.

## Step 4: Define the PDE

Implement the PDE function:

```python
def your_pde(x, u):
    # Define your PDE equations here
    # Use dde.grad.jacobian, dde.grad.hessian, etc., for derivatives
    return [eq1, eq2, ...]

self.pde = your_pde
self.set_pdeloss(names=["eq1_name", "eq2_name", ...])
```

## Step 5: Provide Reference Solution

If you have reference data, load it:

```python
self.load_ref_data("path/to/your/data.dat")
```

Each row of `ref_data` should contain the input and output for a data point, formatted as `[input1, input2, ..., output1, output2, ...]`.

Or you can define a reference solution function:

```python
def ref_solution(x):
    # Define your reference solution here
    return [output1, output2, ...]

self.ref_sol = ref_solution
```

## Step 6: Define Boundary Conditions

Set up the boundary conditions for your PDE:

```python
def boundary_condition_value(x, on_boundary):
    # Define your boundary value here
    pass

def is_on_boundary_condition(x, on_boundary):
    # Define your boundary condition here
    # on_boundary is True means x is directly sampled on the boundaries
    # But you may need to judge which boundary it is
    pass

self.add_bcs([{
    'component': 0,
    'function': boundary_condition_value,
    'bc': is_on_boundary_condition,
    'type': 'dirichlet'
}])
```

We support `DirichletBC, NeumannBC, RobinBC, OperatorBC, PeriodicBC, PointSetBC, IC` from the `deepxde` library.

## Step 7: Set Training Points

Configure the number of training points:

```python
self.training_points(domain=8192, boundary=2048, test=8192)
```

And you're done! You can now use this class to solve your PDEs.

## Example

Here's a simplified 2D Navier-Stokes PDE example:

```python
class SimplifiedNS2D(baseclass.BasePDE):
    def __init__(self, nu=1, bbox=[0, 1, 0, 1]):
        super().__init__()
        self.nu = nu
        self.bbox = bbox
        self.output_config = [{'name': s} for s in ['u', 'v', 'p']]
        self.geom = dde.geometry.Rectangle(xmin=[bbox[0], bbox[2]], xmax=[bbox[1], bbox[3]])

        def ns_pde(x, u):
            u_vel, v_vel, _ = u[:, 0:1], u[:, 1:2], u[:, 2:]
            u_vel_x = dde.grad.jacobian(u, x, i=0, j=0)
            v_vel_y = dde.grad.jacobian(u, x, i=1, j=1)
            p_x = dde.grad.jacobian(u, x, i=2, j=0)
            p_y = dde.grad.jacobian(u, x, i=2, j=1)

            continuity = u_vel_x + v_vel_y
            return [p_x, p_y, continuity]

        self.pde = ns_pde
        self.set_pdeloss(names=["momentum_x", "momentum_y", "continuity"])

        def boundary(x, on_boundary):
            return on_boundary

        self.add_bcs([{
            'component': 0,
            'function': (lambda _: 0),
            'bc': boundary,
            'type': 'dirichlet'
        }, {
            'component': 1,
            'function': (lambda _: 0),
            'bc': boundary,
            'type': 'dirichlet'
        }])

        self.training_points()
```

This example creates a simplified 2D Navier-Stokes PDE with dirichlet boundary conditions. You can use this as a template to create your own custom PDEs.
