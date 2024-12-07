module.exports.getProductsCatergoryWise = function (products){
    let data = {}
    products.forEach(product =>{
      let arr = data[product.category] || [];
      arr.push(product);
      data[product.category] = arr;
    });
    return data;

}