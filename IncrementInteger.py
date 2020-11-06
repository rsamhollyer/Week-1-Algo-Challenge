# 2. Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
    # -- The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
    # -- You may assume the integer does not contain any leading zero, except the number 0 itself.
    # -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/




def array_sequence(array,i):
    global returned_array
    global number_of_elements
    returned_array = array
    number_of_elements = i + len(returned_array)
    for n in returned_array:
        if len(returned_array) >= number_of_elements:
            return returned_array
        else:
            number = returned_array[len(returned_array) - 1] + 1
            returned_array.append(number)
            
print(array_sequence([1,15,13,50,43,-1,0,17,22,55],10))



# def incrementer(array):
#     global new_array
#     new_array = array
#     number_at_head = array[len(array)-1]
#     next_number = (number_at_head + 1)
#     new_array.append(next_number)
#     yield array

# # x = incrementer(list_of_ints)
# # print(x)
# # print(incrementer(list_of_ints))
# s = incrementer(list_of_ints)

# while len(list_of_ints) < 10:
#     incrementer(list_of_ints)
    
    
# def firstN(n):
    
#     num, nums = 0,[]
#     while num < n:
#         yield num
#         num +=1
# # sum_of_first_n = sum(firstN(1000))
# # print(sum_of_first_n)

# array_of_sequence =[]
# s = firstN(1000)
# array_of_sequence.append(s)
# print(array_of_sequence)