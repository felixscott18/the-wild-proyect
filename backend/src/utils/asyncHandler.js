const asyncHandler = (fn) => (req,res,next)=>{
    Promise.resolve(fn(req,resizeTo,next)).catch(next);
};
export default asyncHandler;