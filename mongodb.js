const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.163.3";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    //选择数据库的集合
    const collection = client.db("1906_mongodb").collection("users");

    //获取所有数据
    // collection.find({}).toArray(function(err,docs){
    //     console.log(docs);
    // });

    //获取数据     find里面是where条件
    // collection.find({'name':"zhangsan"}).toArray(function(err,docs){
    //     console.log(docs);
    // });

    //添加数据
    // collection.insertMany([
    //     {name:'abss'},{email:'das@qq.com'}
    // ],function(err,result){
    //     console.log(result);
    // });

    //删除
    // collection.deleteOne({email:'das@qq.com'},function(err,result){
    //     console.log(result);
    // });

    //修改
    collection.updateOne({email:'das@qq.com'},{$set:{email:'tpl@qq.com'}},function(err,result){
        console.log(result);
    });

    client.close();
});