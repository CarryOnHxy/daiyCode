/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,Image,FlatList } from "react-native";
/* 功能:电影数据使用FlatList组件展示出来
    A.引入官方FlatList文件
    B.引入电影数据
    C.将电影数据绑定在FlatList组件上
    D.设置各种FlatList属性函数
*/
const movieData = require('./movieData.json').movies;
export default class ShowFlatList extends Component {
  render() {
    return (
      <FlatList 
        data={movieData}//绑定数据 必需
        renderItem={this.renderItem}//渲染数据格式 必需
        ListHeaderComponent={this.ListHeaderComponent}//给予列表头组件
        ListFooterComponent={this.ListFooterComponent}//给予列表尾组件
        ItemSeparatorComponent={this.ItemSeparatorComponenting}//item的分割组件
        refreshing={false}//是否下拉一直刷新
        onRefresh={this.onRefreshing}  //下拉刷新触发函数
        onEndReached={this.onEndReached}//底部数显触发函数
      ></FlatList>
    );
  }
  renderItem({item}){
      return (
          <View key={1}>
              <Image source={{uri:item.posters.thumbnail}} style={{width:100,height:100}} />
              <View>
                  <Text>{item.year}</Text>
                  <Text>{item.title}</Text>
              </View>
          </View>
      )
  }
  onRefreshing(){
      let timer = setTimeout(()=>{
          alert('refreshing')
      },1500)
  }
  onEndReached(){
    let timer = setTimeout(()=>{
        alert('ending')
    },1500)
  }
  ListHeaderComponent(){
      return(
          <View>
              <Text>我是头部</Text>
          </View>
      )
  }
  ListFooterComponent(){
      return(
          <View>
              <Text>我是底部</Text>
          </View>
      )
  }
  ItemSeparatorComponenting(){
      return (
          <View style={{height:10,backgroundColor:'white'}}>
          </View>
      )
  }
}



