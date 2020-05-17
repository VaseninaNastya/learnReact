import React from "react";
import Reset from '../Reset';
import PrimeCardHolder from '../PrimeCardHolder';
import CardHolder from '../CardHolder';
import Card from '../Card';
import s from "./MainContentBlock.module.css";


const wordsList = [
    {
      eng: 'between',
      rus: 'между'
    },
    {
      eng: 'high',
      rus: 'высокий'
    },
    {
      eng: 'really',
      rus: 'действительно'
    },
    {
      eng: 'something',
      rus: 'что-нибудь'
    },
    {
      eng: 'most',
      rus: 'большинство'
    },
    {
      eng: 'another',
      rus: 'другой'
    },
    {
      eng: 'much',
      rus: 'много'
    },
    {
      eng: 'family',
      rus: 'семья'
    },
    {
      eng: 'own',
      rus: 'личный'
    },
    {
      eng: 'out',
      rus: 'из/вне'
    },
    {
      eng: 'leave',
      rus: 'покидать'
    },
  ];
  const wordsList2 = [
    {
      eng: 'between',
      rus: 'между'
    },
    {
      eng: 'high',
      rus: 'высокий'
    },
    {
      eng: 'really',
      rus: 'действительно'
    },
    {
      eng: 'something',
      rus: 'что-нибудь'
    },
    {
      eng: 'most',
      rus: 'большинство'
    },
    {
      eng: 'another',
      rus: 'другой'
    },
    {
      eng: 'much',
      rus: 'много'
    },
    {
      eng: 'family',
      rus: 'семья'
    },
  
  ];
  

class MainContentBlock extends React.Component {
    state = { allCardWhite: false }
    updateData = (value) => {

        this.setState({ allCardWhite: value })

    }
    render() {
        console.log(this.state);
        const { allCardWhite } = this.state;
        const { children, hideBackground } = this.props;
        const styleCover = hideBackground ? { backgroundImage: "none" } : {};
        return (
            <div className={s.cover}>
                <div className={s.wrap}>
                    <Reset updateData={this.updateData} />
                    <PrimeCardHolder>
                        <CardHolder>
                            {
                                wordsList.map(({ eng, rus }, index) => {
                                    return (
                                    
                                    <Card key={index} eng={eng} rus={rus} 
                                    allCardWhite={allCardWhite}
                                    />
                                    
                                    )
                                })
                            }
                        </CardHolder>
                        <CardHolder>
                        {
                                wordsList2.map(({ eng, rus }, index) => {
                                    return (
                                    
                                    <Card key={index} eng={eng} rus={rus} 
                                    allCardWhite={allCardWhite}
                                    />
                                    
                                    )
                                })
                            }
                        </CardHolder>
                    </PrimeCardHolder>
                    {children}
                </div>
            </div>
        )
    }

}

/*

updateData = (value) => {
    this.setState({ name: value })

const MainContentBlock = ({ hideBackground = false, children }) => {
    /*
        const styleCover = hideBackground? {backgroundImage: "none"}:{};
        return (
            <div className={s.cover} style={styleCover}>
                <div className={s.wrap}>
                    {children}
                </div>
            </div>
        )
    }
    */



export default MainContentBlock;


