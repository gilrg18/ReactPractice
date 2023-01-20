//A component in react IS a JS function
function ExpenseItem() {
  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    <div>
      <div>May 18th 2023</div>
      <div>
        <h2>Skins</h2>
        <div>$4.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
