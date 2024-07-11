

class MyStack:
  def __init__(self):
    """
    stack
    """
    self.stack=[]
  def push(self,data):
    """
    top of stack is last item in list
    """
    self.stack.append(data)
  
  def pop(self):
    """
    return last item first, default takes last item in list
    """
    return self.stack.pop()