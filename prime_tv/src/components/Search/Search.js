import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search"
import axios from 'axios';
import SingleContent from '../SingleContent';
import CustomPagination from '../Pagination/CustomPagination';
const Search = () => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
    const[type,setType]=useState(0);
     const[page,setPage]=useState(1);
      const [searchText, setSearchText] = useState("");
    
    
      const darkTheme=createTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff",
            },
        },
    });

    const fetchSearch=async()=>{
       const {data}= await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };
      useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
      }, [type,page]);
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div style={{ display: "flex", margin: "15px 0" }}>
            <TextField
              style={{ flex: 1, fontWeight: "bold" }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              style={{ marginLeft: 10 }}
              onClick={fetchSearch}
            >
              <SearchIcon />
            </Button>
          </div>

          <Tabs
            style={{ paddingBottom: 5, marginLeft: 200 }}
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            value={type}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              style={{ width: "50%", fontWeight: "bold" }}
              label="Search Movies"
            />
            <Tab
              style={{ width: "50%", fontWeight: "bold" }}
              label="Search TV Series"
            />
          </Tabs>
        </ThemeProvider>
        <div className="trending">
          {searchText &&
            content.length < 1 &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
        </div>

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
}

export default Search
