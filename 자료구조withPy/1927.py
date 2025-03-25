import heapq as h
import sys
heap=[]

N=int(input())
for _ in range(N):
    x=int(sys.stdin.readline())
    if x==0:
        if(len(heap)):print(h.heappop(heap))
        else:print(0)
    else:h.heappush(heap,x)