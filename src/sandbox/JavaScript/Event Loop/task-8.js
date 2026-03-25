async function run() {
    console.log("start");

    const res = await Promise.reject(404);

    console.log(res);
    console.log("done");
}

run();

