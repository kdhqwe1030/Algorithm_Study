import sys
from collections import deque

N=int(input())
queue=deque([])
def isEmpty(tmp):
    if len(tmp)==0:return True
    else: return False
    
for _ in range(N):
    order=sys.stdin.readline().split()
    if order[0]=="push":queue.append(int(order[1]))
    if order[0]=="pop":              # q비어있으면 -1
        if(isEmpty(queue)):print(-1)
        else:print(queue.popleft())
    if order[0]=="size": print(len(queue))
    if order[0]=="empty":              # q비어있으면 1 아니면 0
        if(isEmpty(queue)):print(1)
        else:print(0)
    if order[0]=="front":            # q비어있으면 -1
        if(isEmpty(queue)):print(-1)
        else:print(queue[0])
    if order[0]=="back":             # q비어있으면 -1
        if(isEmpty(queue)):print(-1)
        else:print(queue[-1])