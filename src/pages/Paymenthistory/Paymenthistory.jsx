import { useEffect, useState } from "react";
import SectionTitle from "../../hooks/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure(`http://127.0.0.1:5000/payments?email=${user.email}`).then(
        (data) => {
          setPayments(data.data);
          setIsLoading(false);
        }
      );
    }
  }, [user?.email]);

  return (
    <div>
      <SectionTitle heading="Payment History Page" subHeading="Welcome" />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.price}</td>
                  <td>{payment.date}</td>
                  <td>{payment.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
