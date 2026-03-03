import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your pipeline and activity
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Optimizations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">128</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">42</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">9</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
