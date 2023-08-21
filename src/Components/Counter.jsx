import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, decrementByValue } from "../Redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto text-center">
      <button onClick={()=> dispatch(incrementByValue(5))} className="border px-3 py-2 bg-slate-200 mb-2">Increment By 5</button> <br />
      <button onClick={()=> dispatch(increment())} className="border px-3 py-2 bg-slate-200">Increment</button>
      <div className="text-center text-4xl text-red-600 font-semibold my-3">
        {count}
      </div>
      <button onClick={()=> dispatch(decrement())} className="border px-3 py-2 bg-slate-200 mb-2">Decrement</button> <br />
      <button onClick={()=> dispatch(decrementByValue(5))} className="border px-3 py-2 bg-slate-200">Decrement By 5</button>
    </div>
  );
};

export default Counter;
