import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import profileUser from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

console.log(transactions);
const { name, tag, location, avatar, stats } = profileUser;


function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
      <FriendList friends={friends} />
    
    </>
  );
}

export default App;
