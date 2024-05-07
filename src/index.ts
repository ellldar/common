interface Color {
	red: number;
	blue: number;
	green: number;
}

// @ts-ignore
const color: Color = {
	red: 20,
	blue: 20,
	green: 10
};

console.log(color);

export default color;