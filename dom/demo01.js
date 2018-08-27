// 理解 NodeList 及其近亲 NamedNodeMap 和 HTMLCollection，
// 是从整体上透彻理解 DOM 的关键所在。这三个集合都是 动态的。
// 换句话说，每当文档结构发生变化时，它们都会得到更新。
// 因此，它们始终都会保存着最新、最准确的信息。
// 从本质上说，所有 NodeList 对象都是在访问 DOM 文档时实时运行的查询。
// 例如，下列代码会导致无限循环：
{
  const divs = document.querySelectorAll('div') // {1}
  for (let i = 0; i < divs.length; i++) {
    const div = document.createElement('div')
    document.body.appendChild(div)
  }
}
// {1} 会取得文档中所有 div 元素的 NodeList。
// 由于这个集合是 动态的，因此，只要有新 div 元素被添加到页面中，这个元素也会被添加到该集合中。
// 浏览器不会将创建的所有集合都保存在一个列表中，而是在下一次访问集合时再更新集合。
// 结果，在遇到上例中所示的循环代码时，就会导致一个有趣的问题。
// 每次循环都要对条件 i < divs.length 求值，意味着会运行取得所有 div 元素的查询。
// 考虑到循环体每次都会创建一个新的 div 元素并将其添加到文档中，
// 因此 divs.length 的值在每次循环后都会递增。
// 既然 i 和 divs.length 每次都会同时递增，结果它们的值永远也不会相等。

// 因此，如果想要迭代一个 NodeList，最好使用如下代码：
{
  const divs = document.querySelectorAll('div') // {1}
  for (let i = 0, len = divs.length; i < len; i++) {
    const div = document.createElement('div')
    document.body.appendChild(div)
  }
}

// 一般来说，应该尽量减少访问 NodeList 的次数。因为每次访问 NodeList，都会运行一次基于文档的查询。
// 所以，可以考虑将从 NodeList 中取得的值缓存起来。