import sys
N=int(input())

stack=[]

def isEmpty(tmp):
    if len(tmp)==0:return True
    else: return False

for _ in range(N):
    order=sys.stdin.readline().split()
    
    if order[0]=="push":stack.append(int(order[1]))
    elif order[0]=="pop":
        if(isEmpty(stack)): print(-1)
        else: print(stack.pop())
    elif order[0]=="size":print(len(stack))
    elif order[0]=="empty":
        if(isEmpty(stack)): print(1)
        else: print(0)
    elif order[0]=="top":
        if(isEmpty(stack)): print(-1)
        else:print(stack[-1])
    
    


        