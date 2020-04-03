import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, } from 'react-native';
class Game extends Component {
    state={
        gameBoard:[[0,0,0],
        [0,0,0],
        [0,0,0]],
        currentPlayer:1,
        winner:null,
    }
    handleTap=(row, column)=>{
        let temp= this.state
        temp.gameBoard[row][column]=temp.currentPlayer
        this.checkWinner()
        temp.currentPlayer*=-1
        this.setState(temp)
    }
    iconSpitter=(value)=>{
        if(value===1){
            return('🐶')}
        else{
            if(value===-1){
                return('🐱')
            }
        else{
            return (' ')
        }
        }
        
    }
    messageSpitter=()=>{
        if(this.state.winner===null){
          return  this.iconSpitter(this.state.currentPlayer)+"'s turn"
        }
        else{
          return  this.iconSpitter(this.state.winner)+" won!" 
        }
    }
    
    checkWinner=()=>{
        var winner= null
       let temp=this.state
       for(var i in temp.gameBoard){
           let sum =0
           for( var j in temp.gameBoard[i]){
               sum+=temp.gameBoard[i][j]
           }
           if(sum===3||sum===-3){
               winner=sum/3
               temp.winner=winner
               for(var i in temp.gameBoard){
                for( var j in temp.gameBoard[i]){
                temp.gameBoard[i][j]=winner
                }    
            }
               this.setState(temp)
           }
       }
       for(var i in temp.gameBoard){
        let sum =0
        for( var j in temp.gameBoard[i]){
            sum+=temp.gameBoard[j][i]
        }
        if(sum===3||sum===-3){
            winner=sum/3
            temp.winner=winner
            for(var i in temp.gameBoard){
             for( var j in temp.gameBoard[i]){
             temp.gameBoard[i][j]=winner
             }    
         }
            this.setState(temp)
        }
        if(temp.gameBoard[0][0]+temp.gameBoard[1][1]+temp.gameBoard[2][2]===3
            ||
            temp.gameBoard[0][2]+temp.gameBoard[1][1]+temp.gameBoard[2][0]===3 ){
                winner=1
                temp.winner=winner 
                for(var i in temp.gameBoard){
                    for( var j in temp.gameBoard[i]){
                    temp.gameBoard[i][j]=winner
                    }    
                }
                
                this.setState(temp)
            }
        
            if(temp.gameBoard[0][0]+temp.gameBoard[1][1]+temp.gameBoard[2][2]===-3
                ||
                temp.gameBoard[0][2]+temp.gameBoard[1][1]+temp.gameBoard[2][0]===-3 ){
                    winner=-1
                    temp.winner=winner 
                    for(var i in temp.gameBoard){
                        for( var j in temp.gameBoard[i]){
                        temp.gameBoard[i][j]=winner
                        }    
                    }           
                    
                    this.setState(temp)
                }
    }
    }
    resetBoard=()=>{
        this.setState({
            gameBoard:[[0,0,0],
            [0,0,0],
            [0,0,0]],
            currentPlayer:1,
            winner:null,
        })
    }
    render() {
        return (
            <View>
            <Text style={
                {
                    fontSize:50,
                    textAlign:'center'
                }
            }>Tic Tac Toe</Text>
            <Text style={
                {
                    fontSize:50,
                    textAlign:'center'
                }
            }>{this.messageSpitter()}</Text>
            <View style={styles.Board}>
            {this.state.gameBoard.map(
                (row,rownum)=>{
            return(    <View key={rownum} style={styles.Row}>
                    {row.map((element,colnum)=>
                       { return(
                        <View key={rownum+'x'+colnum} style={styles.element}>
                        <TouchableOpacity 
                        style={styles.Tile}
                        disabled={element===1||element===-1} 
                        onPress={()=>{this.handleTap(rownum,colnum)}}
                        >
                        <Text style={{fontSize:'50px'}}>
                        {this.iconSpitter(element)}
                        </Text>
                        </TouchableOpacity>
                        </View>
                           )
                        }
                        )
                    }
                </View>)
                }
            )}
            </View>
            <View
            style={{margin:10}}
            
            ></View>
            <Button
            title='Reset'
            color={"#e74c3c"}
            onPress={()=>{this.resetBoard()}}
            ></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Board: {
      width:300,
      height:300,
      alignItems:"center",
      justifyContent:'center'
    },
    Row:{
      flexDirection:'row',
      flex:1,
      width:300,
      height:100,
      alignItems:'stretch',
     // margin:5
    },
    element:{flex:1,
        minHeight:100,
        borderColor:'gray',
        borderWidth:3,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'stretch',
        textAlign:'center',
        backgroundColor:'white'
       // margin:5
    },
    Tile:{
        flex:1,
        backgroundColor:"#1ab",
        justifyContent:'center',
        alignItems:'center',
      fontSize:'100px'

    }
  });
  
export default Game