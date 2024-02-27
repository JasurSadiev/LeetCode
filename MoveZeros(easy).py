def move_zeros(num_list):
    slow = 0
    for fast in range(len(num_list)):
        if num_list[fast] != 0 and num_list[slow] == 0:
            num_list[slow], num_list[fast] = num_list[fast], num_list[slow]
        if num_list[slow] != 0:
            slow += 1
    return num_list


print(move_zeros([0, 1, 0, 2]))
