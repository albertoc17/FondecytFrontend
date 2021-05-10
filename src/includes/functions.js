export function validModel(model){
    try {
      JSON.parse(model);
    } catch (e) {
        return false;
    }
    return true;
}
