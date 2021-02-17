import React from 'react'; 
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  //console.log(fav)
  return (
        <div><h1> I Like  {name}</h1>
        <h4>{rating}/5.0</h4>
             <img src={picture} alt={name} />
             </div>
  )

}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodIlike = [{
    id:1,
    name: "Kimchi",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F057%2F2021%2F01%2F26%2F0001542922_001_20210126181149945.png&type=a340"
    ,rating : 3.5
  },
  { id : 2,
    name: "Samgyeopsal",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTJfMTMg%2FMDAxNjEwNDExMTU1MDk2.eBcnxNnLcwa0wE2nor7K9WxVje8kq9QBD1ebJjw3XA8g.f63VmBmnLJGR2M_AY5CDPzz10w9lkDKa1uTvyqmfX-8g.JPEG.ghyojung95%2FIMG_4591.JPG&type=a340"
    ,rating : 4.5 
  },
  { id : 3,
    name: "Kimbab",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDNfMjQ0%2FMDAxNjA5NjMzMDM3MzA3.Erjot4En5hD_f-aXqTYvlUqUxlM_FLd_J5L_tYy9rXcg.DqJC7o7ys7Y89x2ml42iSYsSVE9nUXFzjMhL_A_tsuEg.JPEG.funday1027%2F20210102%25A3%25DF173005.jpg&type=a340"
    ,rating : 3.0
  }
]

function App() {
  return (
    <div > 
      <h1>Hello!!</h1>
      {foodIlike.map(dish=><Food key ={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
