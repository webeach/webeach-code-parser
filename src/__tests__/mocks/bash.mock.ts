// language=bash
export const bashHelloWorld = `
echo "Hello, world!"
`;

// language=bash
export const bashVariables = `
NAME="Max"
echo "Welcome, $NAME!"
`;

// language=bash
export const bashIfElse = `
if [ "$1" = "test" ]; then
  echo "Test mode"
else
  echo "Normal mode"
fi
`;

// language=bash
export const bashLoop = `
for i in 1 2 3; do
  echo "Value: $i"
done
`;

// language=bash
export const bashFunction = `
greet() {
  echo "Hello, $1!"
}

greet "Alice"
`;

// language=bash
export const bashArguments = `
echo "Script name: $0"
echo "First arg: $1"
echo "All args: $@"
`;

// language=bash
export const bashCase = `
case "$1" in
  start)
    echo "Starting..."
    ;;
  stop)
    echo "Stopping..."
    ;;
  *)
    echo "Unknown command"
    ;;
esac
`;

// language=bash
export const bashArray = `
my_array=(one two three)
echo "Second item: \${my_array[1]}"
`;

// language=bash
export const bashRedirect = `
echo "Logging..." >> app.log
cat app.log
`;

// language=bash
export const bashPipeGrep = `
ps aux | grep node | grep -v grep
`;

// language=bash
export const bashYarnAdd = `
yarn add @webeach/code-parser
`;
