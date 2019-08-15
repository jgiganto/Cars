using Bsd.Cars.Domain.Orders;
using Bsd.Cars.Domain.Shared;
using System.Threading;
using System.Threading.Tasks;

namespace Bsd.Cars.Domain.Repositories.Orders
{
    public interface IOrderRespository : IRepository<Order>
    {
        Task<Order> FindById(int id, CancellationToken cancellationToken);
    }
}
