# Module PINNacle.src.utils.random

## Functions

`fftind(size)`
: Returns a numpy array of shifted Fourier coordinates k_x k_y.

    Input args:
        size (integer): The size of the coordinate array to create
    Returns:
        k_ind, numpy array of shape (2, size, size) with:
            k_ind[0,:,:]:  k_x components
            k_ind[1,:,:]:  k_y components

    Example:

        print(fftind(5))

        [[[ 0  1 -3 -2 -1]
        [ 0  1 -3 -2 -1]
        [ 0  1 -3 -2 -1]
        [ 0  1 -3 -2 -1]
        [ 0  1 -3 -2 -1]]
        [[ 0  0  0  0  0]
        [ 1  1  1  1  1]
        [-3 -3 -3 -3 -3]
        [-2 -2 -2 -2 -2]
        [-1 -1 -1 -1 -1]]]

`gaussian_random_field(alpha=3.0, size=128, flag_normalize=True)`
: Returns a numpy array of shifted Fourier coordinates k_x k_y.

    Input args:
        alpha (double, default = 3.0):
            The power of the power-law momentum distribution
        size (integer, default = 128):
            The size of the square output Gaussian Random Fields
        flag_normalize (boolean, default = True):
            Normalizes the Gaussian Field:
                - to have an average of 0.0
                - to have a standard deviation of 1.0
    Returns:
        gfield (numpy array of shape (size, size)):
            The random gaussian random field

    Example:
    import matplotlib
    import matplotlib.pyplot as plt
    example = gaussian_random_field()
    plt.imshow(example)

`generate_darcy_2d_coef(N_res, alpha, bbox)`
:

`generate_heat_2d_coef(N_res, alpha, bbox)`
:

`generate_possion_a_coef(shape=(10, 10), rang=(-2, 3))`
:
