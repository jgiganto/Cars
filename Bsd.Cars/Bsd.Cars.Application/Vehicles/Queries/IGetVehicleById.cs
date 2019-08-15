using Bsd.Cars.Application.Vehicles.Responses;
using System.Threading;
using System.Threading.Tasks;

namespace Bsd.Cars.Application.Vehicles.Queries
{
    public interface IGetVehicleById
    {
        Task<VehicleModel> Query(int id, CancellationToken cancellationToken);
    }
}
