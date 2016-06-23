Node Async and Event Loop
==========================

这一块非常复杂，有这些概念需要了解：

- `Event Loop`以及在[libuv](https://github.com/libuv/libuv)上定义的各个phase的意义

几个常用的异步函数：

- `nextTick`
- `setImmediate`
- `setTimeout/setInterval`

一些重要的文档
------------

- https://github.com/nodejs/node/blob/master/doc/topics/the-event-loop-timers-and-nexttick.md
- http://docs.libuv.org/en/v1.x/design.html
- 以及其它可以搜索到的有关文章

我的心得
-------

关于Node.js上Event Loop的概念以及由libuv定义的几个phase非常重要，如果不努力理解它们，就无法解释这个项目中包含的各文件中的代码的输出。

但是它们又非常复杂，我花了两三天的时间，依然无法细致的理解全部。好在目前大概了解的部分已经够用了，那些更复杂的只能等到真正用到的时候再花时间了。

我现在所理解的东西大概有（可能不准确）：

1. 通过`nextTick`, `setTimeout`, `setImmediate`定义的异步操作，以及各种IO操作，它们分属于不同的类别，将在不同的phase执行，有先后顺序

2. 在一个事件循环过程中，新产生的异步操作（除了`nextTick`）会被排到下一次循环，它们的执行顺序会根据类别及其它因素重新调整

3. `nextTick`会插队（在本轮循环的IO Poll前面）

4. 上面提到的几种操作，它们在一个循环过程中的大概顺序是：

        到期的timers(setTimeout/setInterval)
        nextTick
        I/O Poll
        setImmediate

    当然实际情况更复杂一些，参看前面提到的文档

4. `setImmediate`与`setTimeout(func, 0)`相比，前者更好（更表意，性能更好）

由于这里实在太复杂，项目中只是提供了一些js代码，但是并没有注释，可以试着自己运行并解释运行结果。。