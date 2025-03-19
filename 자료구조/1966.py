import heapq as h
from collections import deque


T=int(input())
for _ in range(T):
    n,m=map(int,input().split())
    count=0
    per=input().split()
    
    #힙 생성
    heap=[(-int(per[i]),int(per[i])) for i in range(n)]
    h.heapify(heap)
    
    # 덱 생성
    queue=deque((i,int(per[i])) for i in range(n))
    
    while queue:
        index,priority=queue.popleft()
        if priority<heap[0][1]:queue.append((index,priority))
        else:
            h.heappop(heap)
            count+=1
        
            if index==m:
                print(count)
                break
        
