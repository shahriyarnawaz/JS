import SecondaryComponent from './SecondaryComponent'

const PrimaryComponent = {} => 
{
    let sum = function (x, y) 
    {
        return x + y;
    }
    let sum = {x, y} => x + y;
    return 
    (
        <>
            <h1>Primary Component</h1>
            <SecondaryComponent/>
        </>
    )
}
export default PrimaryComponent;