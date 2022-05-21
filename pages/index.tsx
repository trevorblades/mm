import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <div>
      <FormControl>
        <FormLabel>Enter room code</FormLabel>
        <Input placeholder="abc123" />
      </FormControl>
      <Button variant="ghost" colorScheme="orange">
        Create room
      </Button>
    </div>
  );
}
