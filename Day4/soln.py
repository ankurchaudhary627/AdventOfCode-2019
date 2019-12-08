from collections import Counter

start,end=108457,562041
count=0

def partOne(count):
  for num in range(start+1,end):
    num=str(num)
    if ''.join(sorted(num))==num:
      num_dict=dict(Counter(num))
      found=False
      for val in num_dict.values():
        if val>=2:
          found=True
          break
      if found:
        count+=1

  print(count)

def partTwo(count):
  for num in range(start+1,end):
    num=str(num)
    if ''.join(sorted(num))==num:
      num_dict=dict(Counter(num))
      found=False
      Max=0 if max(num_dict.values())==2 else max(num_dict.values())
      for val in num_dict.values():
        if val>=2 and val!=Max:
          found=True
          break
      if found:
        count+=1

  print(count)

# Part 1
partOne(count)

# Part 2
partTwo(count)