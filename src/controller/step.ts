exports.step = (angle_final: number) => {
    const total_step = 200;
    let result: number;
    result = (angle_final*total_step)/360;
    result = Math.round(result);
    return result;
}
