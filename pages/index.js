import Hexagon from 'react-hexagon';
import { Box, Column } from 'gestalt';
import Head  from 'next/head';
import Menu from '../components/menu';
import 'gestalt/dist/gestalt.css';
import './index.css';

class Index extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      size: 5,
      strokeWidth: 21,
      arrayEl: [],
      currentPlayer: "#0080ff",
      winner: null
    }
  }

  async play(i, j) {
    if(i!== 0 && j !== 0 && i !== 12 && j !== 12 && !(this.state.arrayEl[i] && this.state.arrayEl[i][j]) && this.state.winner === null){
      await this.setState(prev => {
        if(!prev.arrayEl[i]) prev.arrayEl[i] = [];
        prev.arrayEl[i][j] = prev.currentPlayer;
        //check win bang thuat toan do thi
            let arrayVis = [];
            let queue = [];
            let path = [];
            let win = false;
            for(let x = 0 ; x < 12; x ++) 
              if(prev.currentPlayer === "#0080ff") {
                if(prev.arrayEl[x] && prev.arrayEl[x][1] == prev.currentPlayer) {
                  queue.push({x: x, y: 1}); 
                  if(!arrayVis[x]) arrayVis[x] = []
                  arrayVis[x][1] = true;
                }
              } else {
                if(prev.arrayEl[1] && prev.arrayEl[1][x] == prev.currentPlayer) {
                  queue.push({x: 1, y: x}); 
                  if(!arrayVis[1]) arrayVis[1] = []
                  arrayVis[1][x] = true;
                }
              }
            while(queue.length !== 0) {
              let point = queue.pop()
              for(let x = point.x - 1; x <= point.x + 1; x ++) {
                for(let y = point.y - 1; y <= point.y + 1; y ++) {
                  if(prev.arrayEl[x] && prev.arrayEl[x][y] == prev.currentPlayer && (!arrayVis[x] || !arrayVis[x][y]) && !(x == point.x -1 && y == point.y -1) && !(x == point.x +1 && y == point.y +1)) {
                    queue.push({x: x, y: y, index: path.length})
                    if(!arrayVis[x]) arrayVis[x] = []
                    arrayVis[x][y] = true;
                    if((y == 11 && prev.currentPlayer === "#0080ff") || (x == 11 && prev.currentPlayer === "#e50000")) {
                      win = true;
                      let result = path[path.length -1];
                      prev.arrayEl[x][y] = "rgba(253, 185, 0, .5)";
                      prev.arrayEl[point.x][point.y] = "rgba(253, 185, 0, .5)";
                      while(result && result.index !== -1) {
                        prev.arrayEl[result.x][result.y] = "rgba(253, 185, 0, .5)";
                        result = path[result.index];
                      } 
                      break;
                    }
                  }
                }
              }
              path.push(point)
            }
        return {
          arrayEl: prev.arrayEl,
          winner: win ? prev.currentPlayer : null,
          currentPlayer: prev.currentPlayer === "#0080ff" ? "#e50000":"#0080ff"
        }
      })
    }
  }

  row = (j) => {
    let row = [];
    for(let i = 0; i <= 12; i ++) {
      if(!((i == 0 && j == 0) || (i == 12 && j == 12) || (i == 0 && j == 12) || (i == 12 && j == 0)))
        row.push(
          <Hexagon
            style={{
              stroke: (i == 0 || i == 12) ? "#e50000" : (j == 0 || j == 12) ? "#0080ff" : (this.state.arrayEl[i] && this.state.arrayEl[i][j] && this.state.arrayEl[i][j] === "rgba(253, 185, 0, .5)")? this.state.winner:'#ffffff', 
              strokeWidth: this.state.strokeWidth,
              fill: 
                (this.state.arrayEl[i] && this.state.arrayEl[i][j])? this.state.arrayEl[i][j] : ((j == 0 || j == 12) || (i == 0 || i == 12)) ? "transparent" : 'rgba(255, 255, 100, .15)'
            }}
            key={"tile" + i + j}
            onClick={e => {this.play(i, j)}}
          >
            {
              !(i!== 0 && j !== 0 && i !== 12 && j !== 12) ?
              <text x="41%" y="60%">{(i == 0) ? j : (j == 12) ? String.fromCharCode(i + 64): ""}</text> : <text></text>
            }
          </Hexagon>
        )
      else row.push(<Box width={this.state.size + "%"} key={"tile" + i + j}></Box>)
    }
    return row
  }

  table = () => {
    let table = [];
    for(let i = 0; i <= 12; i ++) {
      table.push(
        <Box 
          display="flex" 
          direction="row" 
          dangerouslySetInlineStyle={{__style:{
            width: "100%", 
            marginLeft: i*(this.state.size/2) + "%", // true
            marginTop: i !== 0 ? "-" + ((this.state.size)/(2*Math.sqrt(3)) + 0.01) +"%" : "0", 
          }}} 
          key={"row" + i}>
          {
            this.row(i)
          }
        </Box>
      )
    }
    return table
  }

  render() {
    return (
    <Box width="100%" height="100vh" display="flex">
      <Head>
        <title key="title">Contactix</title>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"></link>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-2447288350153895",
                enable_page_level_ads: true
              });
            `
          }}
        />
      </Head>
      <Column span={9}>
        <Box display="flex" justifyContent="center" alignItems="center" alignContent="center" height="100vh" color="transparentDarkGray">
          <Box 
          position="relative"
          dangerouslySetInlineStyle={{__style:{
            left: "2.5%",
          }}} >
            { this.table() }
          </Box>
        </Box>
      </Column>
      <Column span={3}>
        <Menu />
      </Column>
    </Box>)
  }
}

export default Index