#1. Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.

an_array = [0,102,350,2,0,532,0,456,1,0,245,0]

def moving_zeros(array):
    zero_array = []
    ordered_array = []
    for number in array:
        if number == 0:
            zero_array.append(number)
        else:
            ordered_array.append(number)
    ordered_array.extend(zero_array)
    return ordered_array

print(moving_zeros(an_array))