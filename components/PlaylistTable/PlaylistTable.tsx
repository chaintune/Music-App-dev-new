'use client'
import { useReducer } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    margin-right: 23vw;
    padding: 2vw 3vw;
`;

const TableContainer = styled.div`
    overflow-x: auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    position: relative;
    background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
    background-color: rgb(30, 30, 30);
    /* background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%); */
`;

const Input = styled.input`
     background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
    linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
    border-radius: 10px;
    border: none;
    margin-left: 0.5vw;
    padding: 1vw;
    padding-left: 3vw;
    font-size: 1vw;
    border-radius: 2vw;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

const SvgContainer = styled.div`
    position: absolute;
    left: 0.3vw;
    top: 0;
    height: 100%;
    width: 4vw;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  flex-direction: column;
`;

const Button = styled.button`
  display: inline-flex;
  gap: 1vw;
  font-size: 0.95vw;
  border-radius: 20vw; /* Use a high value for rounded shape */
  padding: 0.75rem 1rem;
  align-items: center;
  color: white;
  border: 0.1vw;
  outline: none;
  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  /* background-color: rgb(30, 30, 30); */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  &:hover {
    background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
  }

  &:focus {
    ring: 4px solid #d2d6dc;
  }

  /* Add dark mode styles here */
`;

const Dropdown = styled.div`
  position: relative;
  z-index: 10;
  flex-direction: column;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 11rem; /* Adjust width as needed */
`;

const ListItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #edf2f7;
    color: #2d3748;
  }

  /* Add dark mode styles here */
`;

const DeleteUserLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #edf2f7;
    color: #2d3748;
  }
`;


const TableBody = styled.tbody`
  /* Add any common styles for the table body here */
`;

const TableRow = styled.tr`
  &:hover {
    background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
    linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  }
`;

const TableCell = styled.td`
  padding: 0 1vw;
  overflow: auto;
  white-space: nowrap;
  font-size: 1vw;
`;

const TableId = styled.td`
  padding: 0 1vw;
  overflow: auto;
  white-space: nowrap;
  font-size: 1vw;
  position: relative;
  /* margin: 2vw 0 0 3vw; */
`;

const Image = styled.img`
  width: 3.3vw;
  height: 3.3vw;
  border-radius: 0.375rem; /* Rounded-lg */
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  opacity: 0.6;
`;

const TableHead = styled.thead`
  font-size: 1vw; 
  font-weight: lighter;
`;

const TableHeaderId = styled.th`
  padding: 1rem;
  /* position: absolute; */
  /* margin: 0vw 0 0 3vw; */
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
`;

const PlaylistTable = () => {

    const initialState = {
        defaultValue: "Sort by: Most Recent",
        dropdown: false,
    }

    const reducer = (state: any, action: { type: any; payload: any; }) => {
        switch (action.type) {
            case 'SET_FILTER':
                return {
                    ...state,
                    defaultValue: action.payload,
                    dropdown: false,
                }
            case 'TOGGLE_DROPDOWN':
                return {
                    ...state,
                    dropdown: !state.dropdown,
                };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleDropdown = () => {
        console.log(state.dropdown);
        dispatch({
            type: 'TOGGLE_DROPDOWN',
            payload: undefined
        })
    }

    const handleOptionChange = (value: any) => {
        console.log(value);
        dispatch({ type: 'SET_FILTER', payload: value })
    }

    const options = [
        "Most Popular",
        "Top Rated",
        "Most Played",
    ]

    return (

        <MainContainer>
            <TableContainer>
                <div
                    id="search-action-section"
                    className="flex flex-wrap items-center justify-between py-4 px-2 gap-4"
                >
                    <div className="flex-grow">
                        <div className="relative w-full">
                            <SvgContainer>
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </SvgContainer>
                            <Input
                                type="text"
                                id="table-search-users"
                                placeholder="Search"
                            // value={searchQuery}
                            // onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                    <FlexContainer>
                        <Button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" onClick={toggleDropdown}>
                            <span className="sr-only" onChange={handleOptionChange}>Action button</span>
                            {state.defaultValue}
                            <svg
                                className="w-3 h-3 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Button>
                        {
                            state.dropdown && (
                                <div
                                    id="dropdownAction"
                                    className="z-10 absolute mt-[4vw] overflow-hidden bg-white rounded-lg shadow w-44 dark:bg-[#1F222880] dark:divide-gray-600"
                                >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                        {options.map((option, index) => (
                                            <li key={index}>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleOptionChange(option)}>{option}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </FlexContainer>
                </div>
                <table
                    // ref={tableRef as React.RefObject<HTMLTableElement>}
                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <TableHead>
                        <tr>
                            <TableHeaderId>
                                #
                            </TableHeaderId>
                            <TableHeaderCell>
                                Title
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Album
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Date Added
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Duration
                            </TableHeaderCell>
                        </tr>
                    </TableHead>
                    {/* {songs.map(song => ( */}
                    <TableBody>
                        <TableRow>
                            <TableId>
                                01
                            </TableId>
                            <TableCell scope="row">
                                <div className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="https://practicaltyping.com/wp-content/uploads/2022/01/ayanokoji.jpg"
                                        alt="Jese image"
                                    />
                                    <div className="pl-3">
                                        <Title>Feel It Still</Title>
                                        <Subtitle>Portugal. The Man</Subtitle>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                Woodstock
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">2 days ago</div>
                            </TableCell>
                            <TableCell>
                                2:43
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableId>
                                01
                            </TableId>
                            <TableCell scope="row">
                                <div className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="https://practicaltyping.com/wp-content/uploads/2022/01/ayanokoji.jpg"
                                        alt="Jese image"
                                    />
                                    <div className="pl-3">
                                        <Title>Feel It Still</Title>
                                        <Subtitle>Portugal. The Man</Subtitle>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                Woodstock
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">2 days ago</div>
                            </TableCell>
                            <TableCell>
                                2:43
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </table>
            </TableContainer >
        </MainContainer >
    );
}

export default PlaylistTable;