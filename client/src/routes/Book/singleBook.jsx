import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const customMaterialDark = {
  ...materialDark,
  'span.token': {
    color: '#fff', // Set the text color to white
  },
};


function singleBook () {

    const [data, setData] = useState([]);
    const urlSlug = useParams(); // ye path mai konse parameters hai. konse path mai?
    const baseUrl = `http://localhost:8000/api/books/${urlSlug.slug}`;


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(baseUrl);
                if(!response.ok) {
                    throw new Error("Error fetching book");
                }

                const jsonData = await response.json();
                setData(jsonData);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    function StarRating({ num }) {
        const stars = [];
        for(let i = 0; i < num; ++i) {
            stars.push(<span key={i}>⭐</span>)
        }
        return <div>Rating: {stars}</div>
    }


    return (
        <main className="bg-slate-900 py-7 mx-auto relative ">
        
        <div className="col-1 rounded-xl items-center justify-evenly text-center">
        
            <img className="mx-auto py-12 min-h-36 min-w-36 content-center items-center justify-center" src={`http://localhost:8000/uploads/${data?.thumbnail}`}
            alt={data?.title} />
            <Link to={`/editproblem/${data.slug}`} className="text-xl">✏️Edit</Link> <br/><br/>
            <Link to="/problems">🔙 Books </Link>
        </div>
        <div className="py-10 ">
         
    
        
          
        <br />
        <div className="flex items-center p-5 mx-auto overflow-auto">
          <div className="px-10">
            <h1 className="text-3xl font-serif text-pretty text-amber-200">{data?.title}</h1> <br />


            <div className="description-box whitespace-pre-line text-lg text-fuchsia-200 font-serif">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={customMaterialDark}
                        language={match[1]}
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        {...props}
                      />
                    ) : (
                      <code className={className} style={{color:"white"}} {...props}>
                        {children}
                      </code>
                    );
                  },
                  strong: ({ node, ...props }) => <strong style={{ fontWeight: 'bold' }} {...props} />,
                }}
              >
                {data?.description}
              </ReactMarkdown>
            </div>
            






            {/* <p className="text-lg font-mono whitespace-pre-line">{data?.description}</p><br /> */}





            <br />
            <span className="text-lg font-serif text-slate-200"><StarRating num={data?.stars} /> </span> <br />
    
            <p className="text-lg font-serif text-slate-200">Category</p>
            <ul className="font-serif text-pretty text-amber-200 text-lg">
              {data?.category?.map((item, index)=> (
                <li key={index}>{item.charAt(0).toUpperCase()+item.substr(1)}</li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </main>
      );

}

export default singleBook;