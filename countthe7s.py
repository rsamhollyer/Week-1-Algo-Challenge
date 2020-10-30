#2. Write a function that counts the number of times the number 7 occurs in a given integer
# without converting it to a string.
# For example the number 7,704,793 would output 3
some_number = 777777704793


def number_counter(number):
    counter = 0
    abs_num = abs(number)
    while abs_num > 0:
        remainder = abs_num % 10
        abs_num = (abs_num - remainder)/ 10
        if remainder == 7:
            counter += 1
    return counter
        


print(number_counter(some_number))