# Module PINNacle.src.utils.geom

## Classes

`CSGMultiDifference(geom1, geom2_list)`
: Construct an object by CSG Difference.

    ### Ancestors (in MRO)

    * deepxde.geometry.geometry.Geometry
    * abc.ABC

    ### Methods

    `boundary_normal(self, x)`
    :   Compute the unit normal at x for Neumann or Robin boundary conditions.

    `inside(self, x)`
    :   Check if x is inside the geometry (including the boundary).

    `not_inside_geom2(self, x)`
    :

    `on_boundary(self, x)`
    :   Check if x is on the geometry boundary.

    `random_boundary_points(self, n, random='pseudo')`
    :   Compute the random point locations on the boundary.

    `random_points(self, n, random='pseudo')`
    :   Compute the random point locations in the geometry.
