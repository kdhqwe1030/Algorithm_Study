import sys
from collections import deque
N=int(input())
Deque=deque([])

def isEmpty(tmp):
    if len(tmp)==0:return True
    else: return False

for _ in range(N):
    order=sys.stdin.readline().split()
    if order[0]=="push_front":Deque.appendleft(order[1])
    if order[0]=="push_back":Deque.append(order[1])
    if order[0]=="pop_front": #만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if(isEmpty(Deque)):print(-1)
        else:print(Deque.popleft())
    if order[0]=="pop_back": # 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if(isEmpty(Deque)):print(-1)
        else:print(Deque.pop())
    if order[0]=="size":print(len(Deque))
    if order[0]=="empty": # 덱이 비어있으면 1을, 아니면 0을 출력한다.
        if(isEmpty(Deque)):print(1)
        else:print(0)
    if order[0]=="front": # 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if(isEmpty(Deque)):print(-1)
        else:print(Deque[0])
    if order[0]=="back": # 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        if(isEmpty(Deque)):print(-1)
        else:print(Deque[-1])
    