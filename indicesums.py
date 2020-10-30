#3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.
# Examples and clarification here: https://leetcode.com/problems/two-sum/

some_list = [1,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2]
target = 3
#soultion should be indices [0,1] 
def sum_of_indices(arr,n):
    new_list = list(set(arr)) #this removes duplicate values
    this_is_list = [] #this will be my returned list of indices
    for number1 in new_list: 
        for number2 in new_list:#nested loops to loop over all values
            if number1 != number2: #don't want to check the same number
                sum_list = [] #initialized each time loop is run 
                sum_list.extend([number1, number2]) # exted the list
                sum_list = sum(sum_list) #sum list
                if sum_list == n: #check if list meets target value
                    print(sum_list)
                    this_is_list.extend([some_list.index(number1), some_list.index(number2)]) #when it does, extend the list with the indices of orig list
                    print(this_is_list)
                    return this_is_list


sum_of_indices(some_list,target)