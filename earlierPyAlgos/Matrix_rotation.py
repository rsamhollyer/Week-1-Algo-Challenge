#4. You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
# For
# a = [[1, 2, 3],
#      [4, 5, 6],
#      [7, 8, 9]]
# the output should be
# rotateImage(a) =
#     [[7, 4, 1],
#      [8, 5, 2],
#      [9, 6, 3]]

a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]


# def matrix_machine(matrix):
#     matrix.reverse()
#     for i in range (len(matrix)):
#         for j in range (len(matrix) - 1, i -1, -1):
#             matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
#     print(matrix)    
    
# matrix_machine(a)



def matrix_mach_2(matrix):
    matrix.reverse()
    for i in range (len(matrix)):
        for j in range (len(matrix)- 1, i -1 , -1):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    print(matrix)

matrix_mach_2(a)

