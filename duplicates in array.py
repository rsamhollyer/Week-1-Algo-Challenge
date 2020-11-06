# 1. Given an array of integers, find if the array contains any duplicates.
    # -- Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
    # -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
my_list_of_things = [1,-1,2,-2]
my_other_list = [1,2,3,4,5,5]

def dupeChecker(array):
    if len(array) == len(set(array)):
        return False
    else:
        return True
        
print('This should be true',dupeChecker( my_other_list))
print('This should be false' ,dupeChecker(my_list_of_things))
